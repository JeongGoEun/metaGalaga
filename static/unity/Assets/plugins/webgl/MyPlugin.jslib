﻿mergeInto(LibraryManager.library, {
  SendId: function(userMetaId) {
    var str=Pointer_stringify(userMetaId);
    ReactUnityWebGL.SendId(str);
  },

  Login: function() {
    ReactUnityWebGL.Login();
  },

  StopInterval: function() {
    ReactUnityWebGL.StopInterval();
  },

  GameOver: function(userScore) {
    ReactUnityWebGL.GameOver(userScore);
  },

  RegisterScore: function() {
    ReactUnityWebGL.RegisterScore();
  }
});