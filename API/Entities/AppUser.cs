using System; // directivas using se puede borrar

namespace API.Entities; // nombre del espacio

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString(); // el guid es un identificador unico global
                                                                         // required indica que es obligatorio
                                                                         //inmutable es decir que no se puede cambiar despues de la inicializacion
                                                                         //evitar el cuello de botella es importante porque si no se inicializa dara error
                                                                         //el entero es mutable y puede cambiar
    public required string DisplayName { get; set; }
    public required string Email { get; set; }
}
