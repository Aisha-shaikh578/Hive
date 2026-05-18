import PostFeed from "@/components/PostFeed";
import SideBar from "@/components/SideBar";
import SignUpPrompt from "@/components/SignUpPrompt";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <>
    <div
     className="text-[#0f1419] min-h-screen max-w-[1400px mx-auto flex 2xl:justify-center"
    >
    <SideBar />
    <PostFeed />
    <Widgets />
    </div>

     <SignUpPrompt />
    </>
  );
}
