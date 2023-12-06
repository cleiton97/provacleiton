import { sql } from "@vercel/postgres";


export default async function NewCourse(){
    async function saveCourse(formData: FormData){       
        "use server"
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const url = formData.get("url") as string;
        await sql`INSERT INTO courses (title, description, url) VALUES ( ${title}, ${description}, ${url})`


        console.log("Acesso a função")
    }
    return(
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
            <form>
                <input type="text" name="title" placeholder="Digite o texto do cursos"/><br/>
                <input type="text" name ="description" placeholder="Digite Descrição do curso"/><br/>
                <input type="text" name ="url" placeholder="Digite a url da imagem"/><br/>
                <button formAction={saveCourse} className="text-white">SALVAR</button>
            </form>
        </div>

    )
}

