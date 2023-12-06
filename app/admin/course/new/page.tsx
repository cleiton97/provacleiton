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
            <h1 className="text-white text-center text-4xl">Nome do Alunos</h1>
            <form>
                <input type="text" name="title" placeholder="Digite seu nome"/><br/>
                <input type="text" name ="description" placeholder="Digite no e-mail"/><br/>              
                <button formAction={saveCourse} className="text-black">SALVAR</button>
            </form>
        </div>

    )
}

