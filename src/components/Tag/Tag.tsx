export default function Tag({ tag }: { tag: string }) {
    return (
        <span className="bg-gray-600 p-1 rounded-full text-white text-nowrap capitalize">
            {tag}
        </span>
    );
}
