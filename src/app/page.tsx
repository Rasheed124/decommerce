import { getCurrentSession } from "@/actions/auth";
import Image from "next/image";

export default async function Home() {

    const { user } = await getCurrentSession();
  
  return (
    <div className="">
      {/* {JSON.stringify(user)} */}
  
    </div>
  );
}
