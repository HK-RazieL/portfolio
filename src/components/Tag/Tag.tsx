export default function Tag({ tag }: { tag: string }) {
    return (
        <span className="bg-gray-600 px-2 py-1 rounded-full text-white text-nowrap capitalize">
            {tag}
        </span>
    );
}
