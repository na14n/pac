import Link from "next/link"

export default function Breadcrumbs (props) {
    return (
        <main className="w-fit h-fit flex justify-center items-center gap-2">
            <Link >
            <p>{props.parent}</p>
            </Link>
        </main>
    )
}