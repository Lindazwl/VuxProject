import request from '@/utils/request'

// 房源预定
export function InsertOrderInfo(data) {
  return request({
    url: '/OrderInfo/InsertOrderInfo',
    method: 'post',
    data
  })
}

// 预订单修改接口
export function EditOderList(data) {
  return request({
    url: '/TenantBusiness/OrderInfo/UpdateOrderInfo',
    method: 'post',
    data
  })
}
// 预订单删除接口
export function DeleteOrder(data) {
  return request({
    url: '/TenantBusiness/OrderInfo/DeleteOrderInfoByID',
    method: 'post',
    data
  })
}

export function deleteTenantContractByIDs(data) {
  return request({
    url: '/TenantContract/DeleteTenantContractByIDs',
    method: 'post',
    data
  })
}

export function tenantWithDrawByID(data) {
  return request({
    url: '/TenantContract/WithDrawByID',
    method: 'post',
    data
  })
}

// 房源预约
export function AddAppointmentInfo(data) {
  return request({
    url: '/AppointmentInfo/AddAppointmentInfo',
    method: 'post',
    data
  })
}

// 已看房模拟接口
export function SeeHouse(data) {
  return request({
    url: '/AppointmentInfo/UpdateAppontById',
    method: 'post',
    data
  })
}

// 预定列表
export function GetOderList(data) {
  return request({
    url: '/TenantBusiness/OrderInfo/SelectOrderInfoByPage',
    method: 'post',
    data
  })
}
// 获取租客合同列表
export function AppGetContractTenantList(data) {
  return request({
    url: '/TenantContract/FindTenantContractListPage',
    method: 'post',
    data
  })
}
// 获取租客合同详情
export function AppGetContractTenantDetail(data) {
  return request({
    url: '/TenantContract/ShowTenantContractInfoByTenantID',
    method: 'post',
    data
  })
}
// 获取租客合同的 暂存& 待确认 & 快要到期 & 已到期 的合同数量
export function AppGetTenantContractNumber(data) {
  return request({
    url: '/TenantContract/QueryTenantContractNumber',
    method: 'post',
    data
  })
}
// --获取预约列表----
export function GetReserveList(data) {
  return request({
    url: '/AppointmentInfo/FindAppointListPage',
    method: 'post',
    data
  })
}

// 获取合同详情
export function getContractDetail(data) {
  return request({
    url: '/TenantContract/ShowTenantContractInfoByTenantID',
    method: 'post',
    data
  })
}

// 创建账单
export function getTenantBill(data) {
  return request({
    url: '/CalculationMethod/GetTenantBill',
    method: 'post',
    data
  })
}
// 新增合同
export function insertTenantContract(data) {
  return request({
    url: '/TenantContract/InsertTenantContract',
    method: 'post',
    data
  })
}

// 修改合同
export function editTenantContract(data) {
  return request({
    url: '/TenantContract/EditTenantContract',
    method: 'post',
    data
  })
}

// 手机端租客合同签字
export function mobileTenantSign(data) {
  return request({
    url: '/TenantContract/MobileTenantSign',
    method: 'post',
    data
  })
}
