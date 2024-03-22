import { redirect } from "next/navigation";



export async function navigate(data: FormData) {
    
    redirect(`/api/prs?address=${data.get('address')}&token=${data.get('token')}`);
  }