import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import AuthService from './auth.service';
import { getUrl } from 'shared/constants/constants';

const axiosInstance = axios.create();
const CancelToken = axios.CancelToken;
let cancel_req: any;

export { cancel_req };

export interface AxiosParams {
	method: Method;
	url: string;
	data?: any;
	queryParams?: AxiosRequestConfig['params'];
}

/**
 * get method
 * @param request object containing axios params
 */
const get = <T=any>(url: string, queryParams: AxiosParams['queryParams'] = {}): Promise<T> => {
	return commonAxios<T>({ method: 'GET', url: getUrl(url), queryParams });
};

/**
 * post method
 * @param request object containing axios params
 */
const post = (
	url: string,
	params: any = {},
	queryParams = {}
): Promise<any> => {
	return commonAxios({
		method: 'POST',
		url: getUrl(url, queryParams),
		data: params,
	});
};

/**
 * put method
 * @param request object containing axios params
 */
const put = (url: string, params: any = {}): Promise<any> => {
	return commonAxios({ method: 'PUT', url: getUrl(url), data: params });
};

/**
 * deleteRequest method
 * @param request object containing axios params
 */
const deleteRequest = (url: string, params: any = {}): Promise<any> => {
	return commonAxios({ method: 'DELETE', url: getUrl(url), data: params });
};

/**
 * patch method
 * @param request object containing axios params
 */
const patch = (url: string, params: any = {}): Promise<any> => {
	return commonAxios({ method: 'PATCH', url: getUrl(url), data: params });
};

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type
 */
const commonAxios = <T = any>({ method, url, data, queryParams }: AxiosParams): Promise<T> => {
	const headers: any = {
		'Content-Type': 'application/json'
	};
	const token = AuthService.getAccessToken();
	if (token) {
		headers['x-access-token'] = `${token}`;
	}
	const body = JSON.stringify(data);
	const reqConfig: AxiosRequestConfig = {
		method: method,
		url: url,
		cancelToken: new CancelToken(function executor(c) {
			// An executor function receives a cancel function as a parameter
			cancel_req = c;
		}),
		headers: headers,
		data: body,
		params: queryParams,
	};

	return new Promise((resolve, reject) => {
		axiosInstance(reqConfig)
			.then((response: AxiosResponse<any>) => {
				resolve(response.data.data);
			})
			.catch((error) => {
				if (
					error &&
					error.response &&
					error.response.data &&
					error.response.data.message
				) {
					reject(error.response.data.message);
				} else {
					reject(error);
				}
			});
	});
};

const httpService = {
	get: get,
	post: post,
	put: put,
	deleteRequest: deleteRequest,
	patch: patch,
	commonAxios: commonAxios
};

export { axiosInstance };

export default httpService;
