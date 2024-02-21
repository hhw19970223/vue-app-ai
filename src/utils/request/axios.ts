import axios, {
  AxiosInstance,
  // AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export const enum API_PREFIX {
  usr = 'user',
};

// axios.defaults.withCredentials = true;//不携带cookice
axios.defaults.headers.post['Content-Type'] = 'application/json';

export interface ResponseError {
  status: number;
  timestamp: number;
  path: string;
  message: string;
  error: string;
  exception: string;
  trace: string;
}

/**
 * http client
 */
export class HttpClient {
  public instance: AxiosInstance;
  private _errorHandler: ((error: any, instance: AxiosInstance) => Promise<any>) | undefined;
  private _showErrorMsg: boolean | undefined;

  constructor(
    prefix: API_PREFIX,
    timeout = 3000,
    errorOptions?: {
      showMsg?: boolean;
      errorHandler?: (error: any, instance: AxiosInstance) => Promise<any>;
    }
  ) {

    this.instance = axios.create({
      baseURL: import.meta.env.VITE_HOST + '/' + prefix,
      timeout,
    });

    const self = this;
    if (errorOptions) {
      if (errorOptions.showMsg) self._showErrorMsg = errorOptions.showMsg;
      if (errorOptions.errorHandler) {
        self._errorHandler = errorOptions.errorHandler;
      } else {
        self._errorHandler = commonHandleError;
      }
    } 

    self.instance.interceptors.request.use(self._handleRequest.call(self));
    self.instance.interceptors.response.use(
      self._handleSuccessResponse.call(self),
      self._handleErrorResponse.call(self)
    );
  }

  /**
   * 请求前拦截器
   * @param config
   * @private
   */
  private _handleRequest() {
    return (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      // const { url } = config;
      // const headers = config.headers || {} as AxiosRequestHeaders;
      return config;
    };
  }

  /**
   * 相应成功拦截器
   * @param response
   * @private
   */
  private _handleSuccessResponse() {
    return (response: AxiosResponse): AxiosResponse => {
      return response.data;
    };
  }

  /**
   * 相应失败拦截器
   * @param error
   * @private
   */
  private _handleErrorResponse() {
    const self = this;
    return async (error: any): Promise<any> => {
      const { response } = error;
      let responseError: ResponseError = response?.data || error;
      if (self._showErrorMsg) {
   
      }

      if (self._errorHandler) {
        //自定义处理错误
        return await self._errorHandler(error, self.instance);
      } else {
        return Promise.reject(responseError);
      }
    };
  }
}

/**
 * 创建http请求实例
 * @param prefix
 * @param timeout
 * @param errorOptions
 */
export function createHttpClient(
  prefix: API_PREFIX,
  timeout = 3000,
  errorOptions?: {
    showMsg?: boolean;
    errorHandler?: (error: any, instance: AxiosInstance) => Promise<any>;
  }
) {
  return new HttpClient(prefix, timeout, errorOptions).instance;
}

export async function commonHandleError(
  error: any,
  _instance: AxiosInstance
): Promise<any> {
  // const { config, response } = error;
  const { response } = error;
  let responseError: ResponseError = response?.data || error;

  //默认处理错误401
  if (response?.status === 401) {
    
  }

  return Promise.reject(responseError);
}
