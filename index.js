'use strict';

// wrapper for Asyncstorage
// #1 - reduce code mess for AsyncStorage
// #2 - practice creating react native modules

import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

var localStorage = {
  set(key, value){
    return AsyncStorage.setItem(key, value);
  },

  get(key) {
    if (!Array.isArray(key)) {
      return AsyncStorage.getItem(key).then(function (value) {
        return value;
      });
    }
  },

  update(key, value){
    return AsyncStorage.setItem(key, value);
  },

  remove(key){
    return AsyncStorage.removeItem(key);
  }
}

module.exports = localStorage;
