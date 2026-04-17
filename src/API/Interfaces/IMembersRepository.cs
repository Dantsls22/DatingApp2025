<<<<<<< HEAD
using System;
using API.Entities;

namespace API.Interfaces;

public interface IMembersRepository{
    void Update(Member member);

    Task<bool> SaveAllAsync();
    Task<IReadOnlyList<Member>> GetMembersAsync();

    Task<Member?> GetMemberAsync(string id);

    Task<IReadOnlyList<Photo>> GetPhotosAsync(string memberId);
    Task<Member?> GetMemberForUpdateAsync(string id);

=======
using API.Entities;
using API.Helpers;

namespace API.Interfaces;

public interface IMembersRepository
{
    void Update(Member member);
    Task<bool> SaveAllAsync();
    Task<PaginationResult<Member>> GetMembersAsync(MemberRequest memberRequest);
    Task<Member?> GetMemberAsync(string id);
    Task<IReadOnlyList<Photo>> GetPhotosAsync(string memberId);
    Task<Member?> GetMemberForUpdateAsync(string id);
>>>>>>> basaar/parcial05
}
