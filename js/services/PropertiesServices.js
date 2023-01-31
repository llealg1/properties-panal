import api from "./AuthencationServices.js"

export const getProperties = async( realtorId = 5, statusId = 5) => {
  let {data} = await api.get(`properties?realtorId=${realtorId}&statusId=${statusId}`);
  return data;
}

export const getPropertiesForId = async( id , realtorId = 5, statusId = 5) => {
  let {data} = await api.get(`properties?id=${id}&realtorId=${realtorId}&statusId=${statusId}`);
  return data;
}


