import Image from "next/image";

export default function Header() {
    return (
        <header className={`flex justify-between items-center p-9 w-full`}>
            <Image src="logo.svg" alt="logo" width={200} height={200} />
            <div className="flex space-x-7 self-center">
            <div className="text-2xl">about</div>
            <div className="text-2xl">for_leaders</div>
            <div className="text-2xl">login</div>
            <div><Image src="cta.svg" alt="CTA button" width={175} height={175}/>
            </div>
            </div>
        </header>
    )
}
