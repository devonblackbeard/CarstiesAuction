﻿using Contracts;
using MassTransit;
using MongoDB.Entities;

namespace SearchService;

public class AuctionDeletedConsumer
{
    public async Task Consume(ConsumeContext<AuctionDeleted> context)
    {
        Console.WriteLine("--> Consuming Auction Deleted " + context.Message.Id);

        var result = await DB.DeleteAsync<Item>(context.Message.Id);

        if(!result.IsAcknowledged)
        {
            throw new MessageException(typeof(AuctionDeleted), "Problem deleting Auction");
        }
    }

}
