import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:intl/intl.dart';

import '../../../../../helpers/ui_helpers/ui_general_helper.dart';

class LastUpdateWidget extends HookWidget {
  final DateTime lastUpdate;
  const LastUpdateWidget({
    required this.lastUpdate,
    Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context) {
    final _lastUpdateTime = useRef<DateTime>(lastUpdate,);
    final _lastUpdateMessage = useState("Now",);
    final _timer = useRef<Timer>(Timer(const Duration(seconds: 1), () => {},),);
    useEffect(
      () {
        _updateLastUpdateTimeSec(
          timerObject: _timer,
          lastUpdate: _lastUpdateTime,
          lastUpdateMessage: _lastUpdateMessage,
        );
        return () => {_timer.value.cancel(),};
      },
      const [],
    );
    return Container(
      margin: ReadyEdgeInsets.getH18(),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          SizedBox(
            child: RichText(
              text: TextSpan(
                children: [
                  const TextSpan(
                    text: "Last update : ",
                    style: TextStyle(
                      fontWeight: FontWeight.w300,
                      fontSize: 12,
                      color: AppColors.grey200Color,
                    ),
                  ),
                  TextSpan(
                    text: _lastUpdateMessage.value,
                    style: const TextStyle(color: AppColors.grey500Color,),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  void _updateLastUpdateTimeSec({
    required ObjectRef<Timer> timerObject,
    required ObjectRef<DateTime> lastUpdate,
    required ValueNotifier<String> lastUpdateMessage,
  }) {
    const _onSec = Duration(seconds: 1,);
    Timer.periodic(
      _onSec,
      (timer,) => {
        timerObject.value = timer,
        _lastUpdateProcessor(lastUpdate, lastUpdateMessage, timer,),
      },
    );
  }

  ///[_lastUpdateProcessor] in order to manipulation time updates
  void _lastUpdateProcessor(
    ObjectRef<DateTime> lastUpdate,
    ValueNotifier<String> lastUpdateMessage,
    Timer timer,
  ) {
    {
      final _lastUpdatedIn = DateTime.now().difference(lastUpdate.value,);
      if (_lastUpdatedIn.inSeconds < 60) {
        lastUpdateMessage.value = _lastUpdatedIn.inSeconds.toString() + "s";
      }
      else {
        ///Cancel timer
        timer.cancel();

        ///Show last update in HH:MM format
        lastUpdateMessage.value = DateFormat(DateFormat.HOUR_MINUTE,).format(lastUpdate.value,);
      }
    }
  }
}
