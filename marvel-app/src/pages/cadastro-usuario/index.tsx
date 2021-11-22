
export default function () {
    return (
        <div>
            <h1>Cadastro Usuario</h1>
            <form action="">

                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" required />

                <label htmlFor="data-nasc">Data de Nascimento</label>
                <input type="date" name="data-nasc" id="data-nasc" />
            </form>
        </div>
    )
}