/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Connection.ACKMM');

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
proto.Connection.ACKMM = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Connection.ACKMM, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Connection.ACKMM.displayName = 'proto.Connection.ACKMM';
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
proto.Connection.ACKMM.prototype.toObject = function(opt_includeInstance) {
  return proto.Connection.ACKMM.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Connection.ACKMM} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Connection.ACKMM.toObject = function(includeInstance, msg) {
  var f, obj = {
    isok: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Connection.ACKMM} The clone.
 */
proto.Connection.ACKMM.prototype.cloneMessage = function() {
  return /** @type {!proto.Connection.ACKMM} */ (jspb.Message.cloneMessage(this));
};


/**
 * required bool isOk = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Connection.ACKMM.prototype.getIsok = function() {
  return /** @type {boolean} */ (!this.hasIsok() ? false : jspb.Message.getField(this, 1));
};


/** @param {boolean|undefined} value  */
proto.Connection.ACKMM.prototype.setIsok = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Connection.ACKMM.prototype.clearIsok = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Connection.ACKMM.prototype.hasIsok = function() {
  return jspb.Message.getField(this, 1) != null;
};


