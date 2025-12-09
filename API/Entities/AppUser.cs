using System; // directivas using se puede borrar

namespace API.Entities; // nombre del espacio

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string DisplayName { get; set; }
    public required string Email { get; set; }

     public string? ImageUrl { get; set; }

    public required byte[] PasswordHash { get; set; }

    public required byte[] PasswordSalt { get; set; }

    //Navigation properties
    public Member Member { get; set; } = null!;

    
    
}


// el guid es un identificador unico global
// required indica que es obligatorio
//inmutable es decir que no se puede cambiar despues de la inicializacion
//evitar el cuello de botella es importante porque si no se inicializa dara error
//el entero es mutable y puede cambiar