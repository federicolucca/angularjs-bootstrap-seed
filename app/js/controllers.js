'use strict';

/* Controllers */


angular.module('myApp.controllers', ['myApp.services', 'angular-carousel'])
    .controller('MyCtrl2', ['$scope', function ($scope) {

        $scope.imagesCover = [
            {url: 'http://static.flickr.com/75/199481072_b4a0d09597_s.jpg'},
            {url: 'http://static.flickr.com/57/199481087_33ae73a8de_s.jpg'},
            {url: 'http://static.flickr.com/69/199481255_fdfe885f87_s.jpg'},
            {url: 'http://static.flickr.com/72/199481203_ad4cdcf109_s.jpg'},
            {url: 'http://static.flickr.com/58/199481143_3c148d9dd3_s.jpg'},
            {url: 'http://static.flickr.com/77/199481108_4359e6b971_s.jpg'},
            {url: 'http://static.flickr.com/57/199481087_33ae73a8de_s.jpg'}
        ];
        $scope.imagesFilo = [
            {url: 'http://static.flickr.com/75/199481072_b4a0d09597_s.jpg'},
            {url: 'http://static.flickr.com/57/199481087_33ae73a8de_s.jpg'},
            {url: 'http://static.flickr.com/69/199481255_fdfe885f87_s.jpg'},
            {url: 'http://static.flickr.com/72/199481203_ad4cdcf109_s.jpg'},
            {url: 'http://static.flickr.com/58/199481143_3c148d9dd3_s.jpg'},
            {url: 'http://static.flickr.com/77/199481108_4359e6b971_s.jpg'},
            {url: 'http://static.flickr.com/57/199481087_33ae73a8de_s.jpg'}
        ];
        $scope.imageSelect = $scope.imagesCover[0];

        $scope.addImage = function (img) {
            $scope.imageSelect = img;
        };
    }])

    .controller('GalleryController', ['$scope', function ($scope, DataSource) {

        var IMAGE_WIDTH = 405;
        $scope.IMAGE_LOCATION = "http://rabidgadfly.com/assets/angular/gallery1/";

        // Retrieve and set data
        // DataSource.get("images.json",function(data) {
        $scope.galleryData = [
            {
                "title": "Altair",
                "id": "ED02-0185-01",
                "desc": "General Atomics Aeronautical Systems, Inc., is developing the Altair version of its Predator B unmanned reconnaissance aircraft, shown here, under NASA's Environmental Research Aircraft and Sensor Technology (ERAST) project. NASA plans to use the Altair as a technology demonstrator testbed aircraft to validate a variety of command and control technologies for unmanned aerial vehicles (UAV), as well as demonstrate the capability to perform a variety of Earth science missions.",
                "image": "altair7.jpg"
            },
            {
                "title": "Altair",
                "id": "ED03-0078-1",
                "desc": "The Altair unmanned aerial vehicle (UAV), built by General Atomics Aeronautical Systems, Inc. for NASA, is poised for flight at GA-ASI's flight test facility at El Mirage, California. The Altair is a modified civil version of the QM-9 Predator B UAV developed by GA-ASI for the U.S. Air Force.",
                "image": "altair6.jpg"
            },
            {
                "title": "Altair",
                "id": "EC03-0154-3",
                "desc": "The remotely-piloted Altair unmanned aerial vehicle (UAV) took to the air on its first checkout flight on June 9, 2003 at El Mirage, California. The aircraft was developed for NASA by General Atomics Aeronautical Systems, Inc. as a long-endurance, high-altitude platform for development of UAV technologies and environmental science missions.",
                "image": "altair5.jpg"
            },
            {
                "title": "Altair",
                "id": "ED05-0082-03",
                "desc": "The long, slender wings of General Atomics Altair UAV are in evidence during a series of climatic and environmental monitoring missions for NOAA and NASA in the spring of 2005.",
                "image": "altair4.jpg"
            },
            {
                "title": "Altair",
                "id": "EC05-0090-19",
                "desc": "A satellite antenna, electro-optical/infrared and ocean color sensors (front) were among payloads installed on the Altair for the NOAA-NASA UAV flight demonstration.",
                "image": "altair3.jpg"
            },
            {
                "title": "Altair",
                "id": "ED06-0208-3",
                "desc": "Equipped with a pod-mounted infrared imaging sensor, the Altair UAS aided fire mapping efforts over wildfires in central and southern California in late 2006.",
                "image": "altair2.jpg"
            },
            {
                "title": "Altair",
                "id": "ED06-0208-1",
                "desc": "A high-tech infrared imaging sensor in its underbelly pod, the Altair unmanned aircraft flew repeated passes over the Esperanza fire to aid firefighting efforts.",
                "image": "altair1.jpg"
            }
        ];

//data;
        $scope.selected = {
            "title": "Altair",
            "id": "ED06-0208-1",
            "desc": "A high-tech infrared imaging sensor in its underbelly pod, the Altair unmanned aircraft flew repeated passes over the Esperanza fire to aid firefighting efforts.",
            "image": "altair1.jpg"
        };
        //  });

        // Scroll to appropriate position based on image index and width
        $scope.scrollToBackGround = function (image, ind) {
            $scope.listposition = {left: (IMAGE_WIDTH * ind * -1) + "px"};
            $scope.selected = image;
        };
        // Scroll to appropriate position based on image index and width
        $scope.scrollToForeGround = function (image, ind) {
            $scope.listposition = {left: (IMAGE_WIDTH * ind * -1) + "px"};
            $scope.selected = image;
        };
    }])

;
 
