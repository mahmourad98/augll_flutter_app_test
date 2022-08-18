var World = {
    /*User's latest known location,
    ** accessible via userLocation.latitude,
    ** userLocation.longitude, userLocation.altitude. */
    userLocation: null,

    /* since we are loading data from the flutter app itself there is no need to load it from the server */
    isRequestingData: false,
    /* True once data was fetched. */
    initiallyLoadedData: false,


    /* Different POI-Marker assets. we will assign the assets in the load pois function */
    markerDrawableIdle: null,
    markerDrawableSelected: null,
    markerDrawableDirectionIndicator: null,


    /* List of AR.GeoObjects that are currently shown in the scene / World. 
    ** we will load coordinates to this list and call it through our flutter app to pass the data */
    /* To be able to deselect a marker while the user taps on the empty screen, the World object holds an
    ** array that contains each marker. */
    markerList: null,
    /* the last selected marker. WHICH IS NULL AT THE BEGINNING */
    currentMarker: null,

    /* */
    locationUpdateCounter: 0,
    updatePlacemarkDistancesEveryXLocationUpdates: 10,


    /* Called to inject new POI data through our flutter app to pass the coordinates*/
    loadPoisFromJsonData: function loadPoisFromJsonDataFn(poiData) {
        /* Destroys all existing AR-Objects (markers & radar). */
        AR.context.destroyAll();

        /* clearing the markers if they were some*/
        World.markerList = [];

        /* Start loading marker assets. */
        // World.markerDrawableIdle = new AR.ImageResource("assets/placeholder_pin.png", {
        //     onError: World.onError
        // });
        // World.markerDrawableSelected = new AR.ImageResource("assets/placeholder_pin.png", {
        //     onError: World.onError
        // });
        // World.markerDrawableDirectionIndicator = new AR.ImageResource("assets/indi.png", {
        //     onError: World.onError
        // });

        /* Loop through POI-information and create an AR.GeoObject which is new Marker(singlePoi)
        ** for every index in the list */
        for (var currentPlaceNr = 0; currentPlaceNr < poiData.length; currentPlaceNr++) {
            var singlePoi = {
                "id": poiData[currentPlaceNr].id,
                "businessLogoUrl": poiData[currentPlaceNr].businessLogoUrl,
                "latitude": parseFloat(poiData[currentPlaceNr].coordinate.latitude),
                "longitude": parseFloat(poiData[currentPlaceNr].coordinate.longitude),
                //"altitude": parseFloat(poiData[currentPlaceNr].coordinate.altitude),
                "altitude": 40.0,
                "distancePerKm": parseFloat(poiData[currentPlaceNr].coordinate.distancePerKm),
            };
            if(poiData[currentPlaceNr].offer != null){
                singlePoi["offer"] = true;
            }
            /* we store the marker of the poi that we created to the markers list */
            World.markerList.push(new Marker(singlePoi));
            /* Updates distance information of all placemarks.
            ** so when you press on the mark you find the right distance */
            World.updateDistanceToUserValues();
        }
        /* we send an update message to inform that the pois where loaded */
        World.updateStatusMessage(currentPlaceNr + ' places loaded', false);
    },


    /* Sets/updates distances of all makers so they are available way faster than calling (time-consuming)
    ** distanceToUser() method all the time. */
    updateDistanceToUserValues: function updateDistanceToUserValuesFn() {
        if(World.markerList != null){
            for (var i = 0; i < World.markerList.length; i++) {
                World.markerList[i].distanceToUser = World.markerList[i].markerObject.locations[0].distanceToUser();
            }
        }
    },


    /* Helper to sort places by distance. */
    sortByDistanceSorting: function sortByDistanceSortingFn(a, b) {
        return a.distanceToUser - b.distanceToUser;
    },


    /* Helper to sort places by distance, descending. */
    sortByDistanceSortingDescending: function sortByDistanceSortingDescendingFn(a, b) {
        return b.distanceToUser - a.distanceToUser;
    },


    /* Returns distance in meters of placemark with maxdistance * 1.1. */
    getMaxDistance: function getMaxDistanceFn() {
        /* Sort places by distance so the first entry is the one with the maximum distance. */
        World.markerList.sort(World.sortByDistanceSortingDescending);
        /* Use distanceToUser to get max-distance. */
        var maxDistanceMeters = World.markerList[0].distanceToUser;
        /* Return maximum distance times some factor >1.0 so ther is some room left and small movements of user
        ** don't cause places far away to disappear. */
        return maxDistanceMeters * 1.1;
    },


    /* Updates status message shown in small "i"-button aligned bottom center. 
    ** this message can also indicate if there is an error or not*/
    updateStatusMessage: function updateStatusMessageFn(message, isWarning) {
        // document.getElementById("popupButtonImage").src = isWarning ? "assets/warning_icon.png" : "assets/info_icon.png";
        // document.getElementById("popupButtonTooltip").innerHTML = message;
    },


    /* Location updates, fired every time you call architectView.setLocation() in native environment. */
    /* The custom function World.onLocationChanged checks with the flag World.initiallyLoadedData if the
    ** function was already called. With the first call of World.onLocationChanged an object that contains geo
    ** information will be created which will be later used to create a marker using the
    ** World.loadPoisFromJsonData function. */
    locationChanged: function locationChangedFn(lat, lon, alt, acc) {
        /* Store user's current location in World.userLocation,
        ** so you always know where user is. */
        World.userLocation = {
            'latitude': lat,
            'longitude': lon,
            'altitude': alt,
            'accuracy': acc
        };
        /* this will be fired if the world data was not loaded */
        // if (!World.initiallyLoadedData) { 
        //     // World.requestDataFromLocal(lat, lon);
        //     // World.initiallyLoadedData = true;
        // }
        // /* Update placemark distance information frequently,
        // ** you max also update distances only every 10m with some more effort.*/
        if (World.locationUpdateCounter === 0) {
            World.updateDistanceToUserValues();
        }
        /* Helper used to update placemark information every now and then */
        World.locationUpdateCounter = (++World.locationUpdateCounter % World.updatePlacemarkDistancesEveryXLocationUpdates);
    },


    /* Screen was clicked but no geo-object was hit. */
    onScreenClick: function onScreenClickFn() {
        if (World.currentMarker != null) {
            World.currentMarker.setDeselected(World.currentMarker);
            World.currentMarker = null;
        }
        //World.closePanel();
    },


    /* Fired when user pressed maker in cam. */
    onMarkerSelected: function onMarkerSelectedFn(marker) {
        /* Deselect previous marker. */
        if (World.currentMarker) {
            // if (World.currentMarker.poiData.id === marker.poiData.id) {
            //     World.closePanel();
            //     return;
            // }
            World.currentMarker.setDeselected(World.currentMarker);
            //World.closePanel();
        }
        /* Highlight current one. */
        marker.setSelected(marker);
        World.currentMarker = marker;
        World.onPoiDetailMoreButtonClicked();
        //World.closePanel();

        /*In this sample a POI detail panel appears when pressing a cam-marker 
        ** (the blue box with title &description), compare index.html in the sample's directory. */
        /* Update panel values with the values of the new marker*/
        //document.getElementById("poiDetailTitle").innerHTML = marker.poiData.title;
        //document.getElementById("poiDetailDescription").innerHTML = marker.poiData.description;

        /* It's ok for AR.Location subclass objects to return a distance of `undefined`.
        ** In case such a distancewas calculated when all distances were queried in `updateDistanceToUserValues`,
        ** we recalculate this specific distance before we update the UI. */
        if (undefined === marker.distanceToUser) {
            marker.distanceToUser = marker.markerObject.locations[0].distanceToUser();
        }

        /* Distance and altitude are measured in meters by the SDK. 
        ** You may convert them to miles / feet if required. */
        var distanceToUserValue = (marker.distanceToUser > 999) ?
            ((marker.distanceToUser / 1000).toFixed(2) + " km") :
            (Math.round(marker.distanceToUser) + " m");
        
        /* change panel's distance value */    
        //document.getElementById("poiDetailDistance").innerHTML = distanceToUserValue;
        
        /* Show panel. */
       // World.openPanel();
    },

    /* open the panel after pressing on the marker */
    openPanel: function openPanel() {
        /* show panel. */
        document.getElementById("panelPoiDetail").style.visibility = "visible";
    },


    /* close the panel after pressing on the screen */
    closePanel: function closePanel() {
        /* Hide panel. */
        document.getElementById("panelPoiDetail").style.visibility = "hidden";
    },

    /* It may make sense to display POI details in your native style.
    ** In this sample a very simple native screen opens
    ** when user presses the 'More' button in HTML.
    ** This demoes the interaction between JavaScript and native code.*/
    /* User clicked "More" button in POI-detail panel -> fire event to open native screen. */
    onPoiDetailMoreButtonClicked: function onPoiDetailMoreButtonClickedFn() {
        var currentMarker = World.currentMarker;
        var markerSelectedJSON = {
            action: "present_selected_poi_details",
            id: currentMarker.poiData.id,
        };
        /* The sendJSONObject method can be used to send data from javascript to the native code.
        ** this will be recieved through the onRecieveJsonObject Function in the flutter app */
        AR.platform.sendJSONObject(markerSelectedJSON);
    },


    /* Request POI data. */
    /* requestDataFromLocal with the geo information as parameters (latitude, longitude) creates different
    ** poi data to a random location in the user's vicinity. */
    requestDataFromLocal: function requestDataFromLocalFn(centerPointLatitude, centerPointLongitude) {
        var poisToCreate = 20;
        var poiData = [];
        for (var i = 0; i < poisToCreate; i++) {
            poiData.push({
                "id": (i + 1),
                "longitude": (centerPointLongitude + (Math.random() / 5 - 0.1)),
                "latitude": (centerPointLatitude + (Math.random() / 5 - 0.1)),
                "description": ("This is the description of POI#" + (i + 1)),
                /* Use this value to ignore altitude information in general - marker will always be on user-level. */
                "altitude": AR.CONST.UNKNOWN_ALTITUDE,
                "name": ("POI#" + (i + 1))
            });
        }
        World.loadPoisFromJsonData(poiData);
    },


    /* You may need to reload POI information because of user movements or manually for various reasons.
    ** In this example POIs are reloaded when user presses the refresh button.
    ** The button is defined in index.html and calls World.reloadPlaces() on click. */
    /* Reload places from content source. */
    reloadPlaces: function reloadPlacesFn(poiData) {
        if (World.markerList.length > 0) {
            World.closePanel();
        }
        if (!World.isRequestingData) {
            if (World.userLocation) {
                World.loadPoisFromJsonData(poiData);
            } 
            else {
                World.updateStatusMessage('Unknown user-location.', true);
            }
        } 
        else {
            World.updateStatusMessage('Already requesing places...', true);
        }
    },


    /* shows alert on error occurunce */
    onError: function onErrorFn(error) {
        alert(error);
    }
};


/* Set a custom function where location changes are forwarded to. There is also a possibility to set
** AR.context.onLocationChanged to null. In this case the function will not be called anymore and no further
** location updates will be received. */
AR.context.onLocationChanged = World.locationChanged;


/* To detect clicks where no drawable was hit set a custom function on AR.context.onScreenClick where the
** currently selected marker is deselected. */
AR.context.onScreenClick = World.onScreenClick;