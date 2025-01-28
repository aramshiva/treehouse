import Image from "next/image"

export function Title() {
    return (
        <div className="flex flex-col items-center text-5xl pt-9">
            <p className="pt-9">your very own</p>
            <Image src="logo.svg" alt="logo" width={600} height={600} className="pt-9" />
            <p className="pt-9">to code in</p>
            <p className="pt-9 text-lg max-w-[40rem] text-center">hack together games, websites, tools, and more, in a web editor, with all the comforts of local dev. made by hack clubbers, for hack clubbers.</p>
            <p className="pt-9 text-2xl font-bold">Coming Soon.</p>
        </div>
    )
}