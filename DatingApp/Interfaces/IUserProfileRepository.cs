using DatingApp.DTOs;
using DatingApp.Entities;
using DatingApp.Helpers;

namespace DatingApp.Interfaces
{
    public interface IUserProfileRepository
    {
        Task<UserProfile> GetUserByIdAsync(int id);   
        Task<UserProfile> GetUserByUserNameAsync(string username);             
        Task<UserProfileDto> GetUserProfileByAppIdAsync(int id);        
        Task<UserProfileDto> GetUserProfileByIdAsync(int id);
        Task<PagedList<UserProfileDto>> GetUserProfilesAsync(UserProfileParams userProfileParams);
        void Update(UserProfile userProfile);
        Task<bool> SaveAllAsync();
    }
}