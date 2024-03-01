'use server'

import { Auction, PagedResult } from "@/types";
import { fetchWrapper } from "@/lib/fetchWrapper";
import { FieldValues } from "react-hook-form";

export const getData = async (query: string): Promise<PagedResult<Auction>> => {
    return await fetchWrapper.get(`search${query}`)
}

export const updateAuctionTest = async () => {
    const data = {
        mileage: Math.floor(Math.random() * 100000) + 1
    }
    return await fetchWrapper.put('auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c', data)
}

export const createAuction = async (data: FieldValues) => {
    console.log('in create auction', data);
    return await fetchWrapper.post('auctions', data)
}

export const getDetailedViewData = async (id: string) : Promise<Auction> => {
    console.log('id: ', id);
    return await fetchWrapper.get(`auctions/${id}`)
} 