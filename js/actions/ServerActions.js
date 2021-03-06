var AppDispatcher = require('../AppDispatcher');
var RideConstants = require('../constants/RideConstants');
var RequestConstants = require('../constants/RequestConstants');
var NotificationConstants = require('../constants/NotificationConstants');

var ServerActions = {

  registeredUser: function(user){
    AppDispatcher.dispatch({
      type: RideConstants.REGISTERED_USER,
      user: user
    });
  },

  signedInUser: function(user){
    AppDispatcher.dispatch({
      type: RideConstants.SIGNED_IN_USER,
      user: user
    });
  },

  loadedRides: function(rides){
    AppDispatcher.dispatch({
      type: RideConstants.RIDES_LOADED,
      rides: rides
    });
  },

  createdRide: function(ride){
    AppDispatcher.dispatch({
      type: RideConstants.RIDE_CREATED,
      ride: ride
    });
  },

  updatedRide: function(ride){
    AppDispatcher.dispatch({
      type: RideConstants.RIDE_UPDATED,
      ride: ride
    })
  },

  deletedRide: function(id){
    AppDispatcher.dispatch({
      type: RideConstants.RIDE_DELETED,
      id: id
    });
  },

  loadedRequests: function(requests){
    AppDispatcher.dispatch({
      type: RequestConstants.REQUESTS_LOADED,
      requests: requests
    });
  },

  createdRequest: function(request){
    AppDispatcher.dispatch({
      type: RequestConstants.REQUEST_CREATED,
      request: request
    });
  },

  updatedRequest: function(request){
    AppDispatcher.dispatch({
      type: RequestConstants.REQUEST_UPDATED,
      request: request
    })
  },

  deletedRequest: function(request){
    AppDispatcher.dispatch({
      type: RequestConstants.REQUEST_DELETED,
      request: request
    });
  },

  signInFlash: function(res){
    AppDispatcher.dispatch({
      type: NotificationConstants.SIGN_IN_FLASH,
      res: res
    })
  },

  registerFlash: function(res){
    AppDispatcher.dispatch({
      type: NotificationConstants.REGISTER_FLASH,
      res: res
    })
  },

  createRideFlash: function(res){
    AppDispatcher.dispatch({
      type: NotificationConstants.CREATE_RIDE_FLASH,
      res: res
    })
  },

  createdNotification: function(notification){
    AppDispatcher.dispatch({
      type: NotificationConstants.NOTIFICATION_CREATED,
      notification: notification
    })
  },

  loadedNotifications: function(notifications){
    AppDispatcher.dispatch({
      type: NotificationConstants.NOTIFICATIONS_LOADED,
      notifications: notifications
    })
  },

  deletedNotification: function(id){
    AppDispatcher.dispatch({
      type: NotificationConstants.NOTIFICATION_DELETED,
      id: id
    })
  }
};

module.exports = ServerActions;
