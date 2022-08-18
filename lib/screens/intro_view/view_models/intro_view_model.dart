import 'dart:async';
import 'package:augll_project/screens/intro_view/view_models/view_model_delegations/branch_details_delegation.dart';
import 'package:augll_project/screens/intro_view/view_models/view_model_delegations/intro_branches_delegation.dart';
import 'package:augll_project/screens/intro_view/view_models/view_model_delegations/intro_categories_delegation.dart';
import 'package:augll_project/screens/intro_view/view_models/view_model_delegations/page_view_settings_delegation.dart';
import 'package:augll_project/screens/intro_view/view_models/view_model_delegations/wikitude_poi_delegation.dart';
import 'package:bot_toast/bot_toast.dart';
import 'package:location/location.dart';
import 'package:stacked/stacked.dart';
import '../../../app/app.logger.dart';
import '../../../helpers/view_model_helpers/base_view_model_helper.dart';
import '../../../models/branches_feature/branch_dto.dart';
import '../../../services/app_level/location_services/location_service.dart';
import '../../../utils/app_level/pagination_util.dart';

class IntroViewModel extends IndexTrackingViewModel with BaseViewModelHelper {
  ///Finals
  final branchesDelegation = IntroBranchesDelegation();
  final categoriesDelegation = IntroCategoriesDelegation();
  final branchDetailsDelegation = IntroBranchDetailsDelegation();

  ///
  final _pageSize = 5;

  ///Late values
  late final WikitudePoiDelegation wikitudePoiDelegation;
  late final PaginationUtil paginationBranches;
  late final PageViewSettingsDelegation pageViewSettingsDelegation;

  ///Null Values
  LocationData? _locationData;
  LocationData? get locationData => _locationData;

  //location Stream Controller
  StreamController locationStreamController = StreamController();

  ///default constructor
  IntroViewModel();

  ///
  Future _handlingGetPaginatedBranches() async {
    final _completer = Completer();
    _completer.complete(
      PaginationUtil<BranchItem>(
        (pageIndex, pageSize, firstTime,) => branchesDelegation.getPaginatedData(
          pageIndex, pageSize, firstTime,
          runBusyFuture<List<BranchItem>>, setError, locationData: _locationData,
        ),
        (data, firstTime,) => branchesDelegation.successGetBranches(
          data, notifyListeners, firstTime,
        ),
        _pageSize,
      ),
    );
    paginationBranches = await _completer.future;
  }

  Future onSearchTapped(String? text,) async {
    branchesDelegation.searchText = text;
    paginationBranches.restPagingWithNewInitialCall();
  }

  ///Categories filter : #84284
  Future onCategorySelected(List<int> listOfSelectedCategories,) async {
    branchesDelegation.selectedCategories = categoriesDelegation.getSelectedCategoriesFromListToParamsMap(listOfSelectedCategories,);
    paginationBranches.restPagingWithNewInitialCall();
    //Then
  }

  Future resetFromBeginning() async {
    await runBusyFuture(
      Future.wait(
        [
          paginationBranches.restPagingWithNewInitialCall(),
          categoriesDelegation.getCategoriesOfBranches(setError,),
        ],
      ),
    );

    branchesDelegation
      ..resetSelectedCategories()
      ..resetSearchText()
      ..resetLastUpdate(notifyListeners,);
  }

  Future<void> getCurrentLocation() async{
    await LocationService.getCurrentLocation().then(
      (value,) async {
        value.fold(
          (l,) => {_locationData = null,},
          (r,) => {_locationData = r, getLogger('location',).d(_locationData,),},
        );
      },
    );
    return;
  }

  void initializeOnLocationChanged(){
    locationStreamController.addStream(
      LocationService.getLocationChangesStream(),
    );
    locationStreamController.stream.listen(
      (event,) {
        BotToast.showSimpleNotification(title: 'Location Has Changed',);
      },
    );
  }

  @override
  void onClose() {}

  @override
  void onModelReady() async{
    ///SetPageView-Setting
    pageViewSettingsDelegation = PageViewSettingsDelegation(this,);
    /// initializing wikitude poi delegation
    wikitudePoiDelegation = WikitudePoiDelegation(this,);

    //todo : on failure get data from local storage
    await runBusyFuture(
      getCurrentLocation().then(
        (value,) async{
          //await _handlingGetPaginatedBranches();
          //await categoriesDelegation.getCategoriesOfBranches(setError,);
          await wikitudePoiDelegation.getBranchesPoints(
            _locationData!, notifyListeners, setError,
          );
          await wikitudePoiDelegation.loadBranchesPointsToArCameraView(
            wikitudePoiDelegation.branches,
          );
        },
      ),
    );
  }

  @override
  void onRetry() {
    resetFromBeginning();
  }

  @override
  void dispose() async{
    await runBusyFuture(this.wikitudePoiDelegation.disposeIntroAugmentedView(),);
    //await locationStreamController.close();
    super.dispose();
  }

  @override
  List<ReactiveServiceMixin> get reactiveServices => [];
}

