/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Media
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export type MediaRecordingFormat = "mp4" | "webm";

export type MediaRecordingOrder = "asc" | "desc";

export type MediaRecordingStatus =
  | "processing"
  | "completed"
  | "deleted"
  | "failed";

/**
 * Options to pass to each
 */
export interface MediaRecordingListInstanceEachOptions {
  /** The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default. */
  order?: MediaRecordingOrder;
  /** Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`. */
  status?: MediaRecordingStatus;
  /** SID of a MediaProcessor to filter by. */
  processorSid?: string;
  /** SID of a MediaRecording source to filter by. */
  sourceSid?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: MediaRecordingInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface MediaRecordingListInstanceOptions {
  /** The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default. */
  order?: MediaRecordingOrder;
  /** Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`. */
  status?: MediaRecordingStatus;
  /** SID of a MediaProcessor to filter by. */
  processorSid?: string;
  /** SID of a MediaRecording source to filter by. */
  sourceSid?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface MediaRecordingListInstancePageOptions {
  /** The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default. */
  order?: MediaRecordingOrder;
  /** Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`. */
  status?: MediaRecordingStatus;
  /** SID of a MediaProcessor to filter by. */
  processorSid?: string;
  /** SID of a MediaRecording source to filter by. */
  sourceSid?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface MediaRecordingContext {
  /**
   * Remove a MediaRecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a MediaRecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MediaRecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MediaRecordingInstance) => any
  ): Promise<MediaRecordingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MediaRecordingContextSolution {
  sid: string;
}

export class MediaRecordingContextImpl implements MediaRecordingContext {
  protected _solution: MediaRecordingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/MediaRecordings/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: MediaRecordingInstance) => any
  ): Promise<MediaRecordingInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MediaRecordingInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface MediaRecordingPayload extends TwilioResponsePayload {
  media_recordings: MediaRecordingResource[];
}

interface MediaRecordingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: number;
  format: MediaRecordingFormat;
  links: Record<string, string>;
  processor_sid: string;
  resolution: string;
  source_sid: string;
  sid: string;
  media_size: number;
  status: MediaRecordingStatus;
  status_callback: string;
  status_callback_method: string;
  url: string;
}

export class MediaRecordingInstance {
  protected _solution: MediaRecordingContextSolution;
  protected _context?: MediaRecordingContext;

  constructor(
    protected _version: V1,
    payload: MediaRecordingResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.duration = deserialize.integer(payload.duration);
    this.format = payload.format;
    this.links = payload.links;
    this.processorSid = payload.processor_sid;
    this.resolution = payload.resolution;
    this.sourceSid = payload.source_sid;
    this.sid = payload.sid;
    this.mediaSize = payload.media_size;
    this.status = payload.status;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MediaRecording resource.
   */
  accountSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The duration of the MediaRecording in seconds.
   */
  duration: number;
  format: MediaRecordingFormat;
  /**
   * The URLs of related resources.
   */
  links: Record<string, string>;
  /**
   * The SID of the MediaProcessor resource which produced the MediaRecording.
   */
  processorSid: string;
  /**
   * The dimensions of the video image in pixels expressed as columns (width) and rows (height).
   */
  resolution: string;
  /**
   * The SID of the resource that generated the original media track(s) of the MediaRecording.
   */
  sourceSid: string;
  /**
   * The unique string generated to identify the MediaRecording resource.
   */
  sid: string;
  /**
   * The size of the recording media in bytes.
   */
  mediaSize: number;
  status: MediaRecordingStatus;
  /**
   * The URL to which Twilio will send asynchronous webhook requests for every MediaRecording event. See [Status Callbacks](/docs/live/status-callbacks) for more details.
   */
  statusCallback: string;
  /**
   * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
   */
  statusCallbackMethod: string;
  /**
   * The absolute URL of the resource.
   */
  url: string;

  private get _proxy(): MediaRecordingContext {
    this._context =
      this._context ||
      new MediaRecordingContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a MediaRecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a MediaRecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MediaRecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MediaRecordingInstance) => any
  ): Promise<MediaRecordingInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      duration: this.duration,
      format: this.format,
      links: this.links,
      processorSid: this.processorSid,
      resolution: this.resolution,
      sourceSid: this.sourceSid,
      sid: this.sid,
      mediaSize: this.mediaSize,
      status: this.status,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MediaRecordingSolution {}

export interface MediaRecordingListInstance {
  _version: V1;
  _solution: MediaRecordingSolution;
  _uri: string;

  (sid: string): MediaRecordingContext;
  get(sid: string): MediaRecordingContext;

  /**
   * Streams MediaRecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaRecordingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: MediaRecordingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: MediaRecordingListInstanceEachOptions,
    callback?: (
      item: MediaRecordingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of MediaRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage>;
  /**
   * Lists MediaRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaRecordingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MediaRecordingInstance[]) => any
  ): Promise<MediaRecordingInstance[]>;
  list(
    params: MediaRecordingListInstanceOptions,
    callback?: (error: Error | null, items: MediaRecordingInstance[]) => any
  ): Promise<MediaRecordingInstance[]>;
  /**
   * Retrieve a single page of MediaRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaRecordingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage>;
  page(
    params: MediaRecordingListInstancePageOptions,
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function MediaRecordingListInstance(
  version: V1
): MediaRecordingListInstance {
  const instance = ((sid) => instance.get(sid)) as MediaRecordingListInstance;

  instance.get = function get(sid): MediaRecordingContext {
    return new MediaRecordingContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/MediaRecordings`;

  instance.page = function page(
    params?:
      | MediaRecordingListInstancePageOptions
      | ((error: Error | null, items: MediaRecordingPage) => any),
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["order"] !== undefined) data["Order"] = params["order"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["processorSid"] !== undefined)
      data["ProcessorSid"] = params["processorSid"];
    if (params["sourceSid"] !== undefined)
      data["SourceSid"] = params["sourceSid"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MediaRecordingPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new MediaRecordingPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class MediaRecordingPage extends Page<
  V1,
  MediaRecordingPayload,
  MediaRecordingResource,
  MediaRecordingInstance
> {
  /**
   * Initialize the MediaRecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: MediaRecordingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MediaRecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MediaRecordingResource): MediaRecordingInstance {
    return new MediaRecordingInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
