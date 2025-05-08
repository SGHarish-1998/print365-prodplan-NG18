import { Injectable } from '@angular/core';
// import * as api from '.';
// import { HttpService } from '../_services/http.service';
// import { Guid } from '../tools';

export interface ISearchResult<T> {
   filter: any;
   result: T;
}

export enum DateMode {
   PublishingDate,
   PrintingDate
}

// NOTE Use PostProdCachedApiService for cached request results

// @Injectable()
// export class PostProdApiService {
//    constructor(
//       private readonly http: HttpService
//    ) { }

//    customers = {
//       get: (id: Guid) => this.http.get<api.Customer>(`api/customer/${id}`),
//       search: (filter?: any) => this.http.post<ISearchResult<api.Customer[]>>(`api/customer`, { filter: filter }),
//       getProducts: (id: Guid) => this.http.get<api.CustomerProduct[]>(`api/customer/${id}/products`),
//       getEditions: (id: Guid) => this.http.get<api.Edition[]>(`api/customer/${id}/editions`),
//       getManagers: () => this.http.get<string[]>(`api/customer/managers`),
//    };

//    customerProducts = {
//       search: (filter?: any) => this.http.post<ISearchResult<api.CustomerProduct[]>>(`api/products`, { filter: filter }),
//    }

//    articles = {
//       search: (term?: string) => this.http.post<api.Article[]>(`api/article`, { term: term })
//    };

//    agreements = {
//       search: (term?: string) => this.http.post<api.PriceAgreement[]>(`api/agreement/forInvoiceWarnings`, { term: term })
//    };

//    invoices = {
//       get: (id: Guid) => this.http.get<api.IInvoice>(`api/invoice/${id}`),
//       search: (filter?: any) => this.http.post<ISearchResult<api.IInvoice[]>>(`api/invoice/`, { filter: filter }),
//       searchForHomePage: (filter?: any) => this.http.post<ISearchResult<api.IInvoice[]>>(`api/invoice/forHomePage`, filter),
//       save: (invoice: ISaveInvoiceRequest) => this.http.put<api.IInvoice>(`api/invoice/${invoice.invoiceId}`, invoice),
//       delete: (id: Guid) => this.http.delete<void>(`api/invoice/${id}`),
//       recalculate: (id: Guid) => this.http.post<api.IInvoice>(`api/invoice/${id}/recalculate`, {}),

//       generateE2bInvoiceExport: (id: Guid) => this.http.post(`api/e2b-invoice/${id}`, {}),
//       generateAgrAccountingExport: (id: Guid) => this.http.post(`api/agr-accounting/${id}`, {}),
//       generateLG04AccountingExport: (id: Guid, batchId: string) => this.http.post(`api/lg04-accounting/${id}/${batchId}`, {}),
//       generateSapExport: (id: Guid) =>  this.http.post(`api/sap-export/${id}`, {}),
//       downloadInvoiceReport: (id: Guid) => this.http.getFile(`api/invoiceReport/download/${id}`),
//       downloadResendReport: (id: Guid) => this.http.get(`api/invoiceReport/resend/${id}`),

//       getExportLogs: (invoiceId: Guid) => this.http.get<IExportLogEntries>(`api/invoice/${invoiceId}/export-logs`),
//       getExportLogsBillToCash: (invoiceId: Guid) => this.http.get<IExportLogEntries>(`api/tamedia/export/${invoiceId}`),
//       generateBillToCashExport: (invoiceId: Guid) => this.http.post(`api/tamedia/export/${invoiceId}/send`, {}),
//       generateDynamics365Export: (invoiceId: Guid) => this.http.post(`api/dynamics365-export/${invoiceId}/send`, {}),
//       hasImportLogs:(invoiceId:Guid) => this.http.get<boolean>(`api/invoice/${invoiceId}/has-import-logs`),
//       getD365ImportLogs: (invoiceId: Guid) => this.http.get<IExportLogEntries>(`api/invoice/${invoiceId}/d365-imports-logs`),
//    };

//    bookings = {
//       get: (id: Guid) => this.http.get<api.IPlannedBooking[]>(`api/booking/${id}`),
//       search: (filter?: ISearchBookingsRequestFilter) => this.http.post<ISearchBookingsResult>(`api/booking`, { filter: filter }),
//       autoInvoicing: (fromDate: Date, toDate: Date) => this.http.post<any>(`api/booking/autoInvoicing`, { fromDate, toDate })
//    };

//    companyInfo = {
//       search: () => this.http.post<ISearchResult<api.ICompanyInfo[]>>(`api/companyInfo`, {}),
//       searchContacts: () => this.http.post<ISearchResult<api.Contact[]>>(`api/companyinfo/contacts`, {})
//    }
// }

export interface IExportLogEntry {
   kind: string;
   id: number;
   exportIdentifier: string;
   generatedOn: string;
   message: string;
   status: string;
   errorDescription: string;
}

export interface IExportLogEntries {
   e2bLog: IExportLogEntry[];
   agrLog: IExportLogEntry[];
   lg04Log: IExportLogEntry[];
   cs15lg04v2Log: IExportLogEntry[];
   b2cLog: IExportLogEntry[];
   vismaLog: IExportLogEntry[];
   sapLog: IExportLogEntry[];
   dynamic365Log: IExportLogEntry[];
   dynamic365importLogs : IExportLogEntry[];
}

// export interface ISearchBookingsRequestFilter {
//    text?: string;
//    includeInvoiced?: boolean;
//    excludeBooked?: boolean;
//    showInternal?: boolean;
//    alwaysIncludeInvoiceId?: string;
//    includeAllEditions?: boolean;
//    customerId?: Guid;
//    invoiceCustomerId?: Guid;
//    excludeBookingIds?: Guid[];
//    publishingDateRange?: [Date, Date];
//    limit?: number;
//    dateMode?: DateMode;
//    contactUser?: string;
//    companyInfoId?: string;
//    isInternalInvoice?: boolean;
// }

// export interface ISearchBookingsResult extends ISearchResult<api.IPlannedBooking[]> {
//    filter: ISearchBookingsRequestFilter;
//    summary: api.BookingsSummary;
//    bookingCountSummary: api.BookingCountSummary;
// }

// export interface ISaveInvoiceRequest extends api.IInvoice {
//    doBookInvoice?: boolean;
//    removedLineIds?: string[];
// }
