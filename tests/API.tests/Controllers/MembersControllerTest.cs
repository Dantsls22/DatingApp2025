using System.Data.Common;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Controllers;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using NUnit.Framework;

namespace API.tests.Controllers;

public class MembersControllerTest
{
    private MembersController _membersController;

    private IMembersRepository _mockMembersRepository;

    [SetUp]
    public void Setup()
    {
        _mockMembersRepository = Substitute.For<IMembersRepository>();
        _membersController = new MembersController(_mockMembersRepository);
    }

    [Test]
    public async Task GetMembers_Valid_ReturnsExpectedResult()
    {
        // Arrange es todo el código que vamos a utilizar
        var userId = "userId";

        DefaultHttpContext testHttpContext = new DefaultHttpContext
        {
            User = new ClaimsPrincipal(new ClaimsIdentity([
                new Claim("email", userId)
            ]))
        };
        _membersController.ControllerContext = new ControllerContext();
        _membersController.ControllerContext.HttpContext = testHttpContext;
        
        IReadOnlyList<Member> expectedMembers =
        [
            new Member
            {
                Id = "test-id",
                BirthDate = DateOnly.Parse("2000-01-01"),
                ImageUrl = null,
                DisplayName = "Test",
                Created = DateTime.UtcNow,
                LastActive = DateTime.UtcNow,
                Gender = "Gender",
                Description = "Description",
                City = "City",
                Country = "Country",
                Photos = []
            }
        ];

        _mockMembersRepository.GetMembersAsync().Returns(expectedMembers);
        // Act

        var membersResult = await _membersController.GetMembers();

        var okResult = membersResult.Result as OkObjectResult;
        Assert.That(okResult, Is.Not.Null, "Expected OkObjectResult but got something else");

        var members = okResult.Value as IReadOnlyList<Member>;
        Assert.That(members, Is.Not.Null);
        Assert.Multiple(() =>
        {
            Assert.That(members.Count, Is.EqualTo(1));
        }); 
        // Assert, la triple A (Arrange, Act, Assert) y las reglas FIRST

        

    }
}
