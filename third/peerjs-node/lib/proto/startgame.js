/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Connection.StartGame');

goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Connection.StartGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Connection.StartGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Connection.StartGame.displayName = 'proto.Connection.StartGame';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Connection.StartGame.prototype.toObject = function(opt_includeInstance) {
  return proto.Connection.StartGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Connection.StartGame} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Connection.StartGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    ismain: jspb.Message.getField(msg, 1),
    challengedname: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Connection.StartGame} The clone.
 */
proto.Connection.StartGame.prototype.cloneMessage = function() {
  return /** @type {!proto.Connection.StartGame} */ (jspb.Message.cloneMessage(this));
};


/**
 * required bool isMain = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Connection.StartGame.prototype.getIsmain = function() {
  return /** @type {boolean} */ (!this.hasIsmain() ? false : jspb.Message.getField(this, 1));
};


/** @param {boolean|undefined} value  */
proto.Connection.StartGame.prototype.setIsmain = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Connection.StartGame.prototype.clearIsmain = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Connection.StartGame.prototype.hasIsmain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string challengedName = 2;
 * @return {string}
 */
proto.Connection.StartGame.prototype.getChallengedname = function() {
  return /** @type {string} */ (!this.hasChallengedname() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string|undefined} value  */
proto.Connection.StartGame.prototype.setChallengedname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Connection.StartGame.prototype.clearChallengedname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Connection.StartGame.prototype.hasChallengedname = function() {
  return jspb.Message.getField(this, 2) != null;
};


