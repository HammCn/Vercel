import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, AxiosResponseHeaders, Method } from 'axios'
import { HttpMethod } from './HttpMethod'
import { HttpStatus } from './HttpStatus'
import { HttpContentType } from './HttpContentType'

/**
 * # 😄网络请求类
 * @author Hamm
 */
export default class Http {
  private baseURL = "https://api3.bbbug.com/"

  /** # 😄基础返回对象 */
  private axiosResponse!: Promise<AxiosResponse<any, any>>;

  /** # 😄基础请求配置 */
  private axiosRequestConfig: AxiosRequestConfig = {};

  /** # 😄当前请求路径 */
  private httpUrl = '';

  /** # 😄是否隐藏自动错误提示 */
  private flagIgnoreError = false;

  /**
   * # 😄初始化一个Http客户端
   * @param url [可选参数] 请求URL
    ```
   */
  constructor(url?: string) {
    this.axiosRequestConfig.method = <Method>HttpMethod.POST
    this.axiosRequestConfig.baseURL = this.baseURL
    this.axiosRequestConfig.headers = {
      'content-type': HttpContentType.JSON,
    }
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      this.axiosRequestConfig.headers.authorization = accessToken
    }
    if (url) {
      this.httpUrl = url
    }
  }

  /**
   * # 😄 设置请求接口路径 
   * 
   * @param url 请求的接口路径
   * @returns API
   * @deprecated 我们更建议直接通过构造传入
   */
  setHttpUrl(url: string): this {
    this.httpUrl = url
    return this
  }

  /**
   * # 😄设置请求头
   * @param header 请求头
   * @returns API
   */
  setHttpHeader(header: Record<string, any>): this {
    if (this.axiosRequestConfig.headers && this.axiosRequestConfig.headers['content-type']) {
      header = { ...header, 'content-type': this.axiosRequestConfig.headers['content-type'] }
    }
    this.axiosRequestConfig.headers = header as AxiosRequestHeaders
    return this
  }

  /**
   * # 😄添加一个请求头
   * @param key 请求头key
   * @param value 请求头value
   * @returns 
   */
  addHttpHeader(key: string, value: string): this {
    this.axiosRequestConfig.headers = this.axiosRequestConfig.headers || {} as AxiosResponseHeaders
    this.axiosRequestConfig.headers[key] = value
    return this
  }

  /**
   * # 😄设置请求方法
   * 支持直接调用 ```.post()``` ```.get()```
   * @param method 请求方法
   * @returns API
   */
  setHttpMethod(method: HttpMethod): this {
    this.axiosRequestConfig.method = <Method>method
    return this
  }

  /**
   * # 😄设置请求content-type
   * @param contentType content-type
   * @returns API
   */
  setContentType(contentType: HttpContentType): this {
    this.axiosRequestConfig.headers = { ...this.axiosRequestConfig.headers, 'content-type': contentType }
    return this
  }

  /**
   * # 😄忽略错误,请自行捕获异常
   * @returns API
   */
  ignoreError(flag: boolean): this {
    this.flagIgnoreError = flag
    return this
  }

  /**
   * # 😄禁止自动提交TOKEN
   * @returns API
   */
  ignoreToken(): this {
    if (this.axiosRequestConfig.headers && this.axiosRequestConfig.headers.authorization) {
      delete this.axiosRequestConfig.headers.authorization
    }
    return this
  }

  /**
   * # 😄发送请求
   * 
   * 支持直接调用 ```.post()``` ```.get()```
   * @param body 请求体
   * @returns 成功实体
   */
  send(body?: any): Promise<any> {
    switch (this.axiosRequestConfig.method) {
      case HttpMethod.POST:
        this.axiosResponse = axios.post(this.httpUrl, body, this.axiosRequestConfig)
        break
      case HttpMethod.PUT:
        this.axiosResponse = axios.put(this.httpUrl, body, this.axiosRequestConfig)
        break
      case HttpMethod.PATCH:
        this.axiosResponse = axios.patch(this.httpUrl, body, this.axiosRequestConfig)
        break
      case HttpMethod.DELETE:
        this.axiosResponse = axios.delete(this.httpUrl, this.axiosRequestConfig)
        break
      default:
        this.axiosResponse = axios.get(this.httpUrl, this.axiosRequestConfig)
    }
    return new Promise((data, error) => {
      this.axiosResponse.then((res) => {

        data(res.data.data)
      }).catch((err) => {
        error(err)
      })
    })
  }

  /**
   * # 😁发送POST请求
   * @param body POST的数据
   * @returns 
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  post(body?: any): Promise<any> {
    this.setHttpMethod(HttpMethod.POST)
    return this.send(body)
  }

  /**
   * # 😁发送GET请求
   * @param params 可携带的参数
   * @returns 
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get(params?: Record<string, any>): Promise<any> {
    if (params) {
      const queryArray = []
      for (const key in params) {
        queryArray.push(`${key}=${params[key]}`)
      }
      if (this.httpUrl.includes('?')) {
        this.httpUrl += `&${queryArray.join('&')}`
      } else {
        this.httpUrl += `?${queryArray.join('&')}`
      }
    }
    this.setHttpMethod(HttpMethod.GET)
    return this.send()
  }
}