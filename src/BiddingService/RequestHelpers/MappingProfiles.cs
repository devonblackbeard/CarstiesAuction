using AutoMapper;
using BiddingService.DTOs;

namespace BiddingService.RequestHelpers
{
    public class MappingProfiles : Profile
    {

        public MappingProfiles()
        {
            CreateMap<Bid, BidDto>();
        }
    }
}
