interface SkillCardProps {
    title: string;
    level: string;
    description?: string;
}

export default function SkillCard({
    title,
    level,
    description,
}: SkillCardProps) {
    return (
        <div className="border rounded-1g p-4 shadow-sm bg-white hover:shadow-md transition">
            <h3 className="text-1g font-semibold text-gray-800">{title}</h3>

            <p className="text-sm text-gray-600 mt-1">
                Level: <span className="font-medium">{level}</span>
            </p>

            {description && (
                <p className="text-sm text-gray-500 mt-2">{description}</p>
            )}
        </div>
    );
}