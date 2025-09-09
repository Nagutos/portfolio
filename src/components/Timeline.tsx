import { FaMapMarkerAlt } from 'react-icons/fa';

type TimelineItem = {
  period: string;
  place: string;
  role: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l-4 border-primary ml-4">
      {items.map((item, i) => (
        <div key={i} className="mb-10 ml-6">
          {/* Point */}
          <span className="absolute -left-3 w-5 h-5 bg-red-500 rounded-full border-4 border-neutral-light"></span>

          <div className="bg-white shadow-md rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <time className="text-sm text-gray-500">{item.period}</time>
            <h3 className="text-xl font-semibold text-gray-800">{item.role}</h3>
            <p className="text-gray-600 italic flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500 w-5 h-5" />
              {item.place}
            </p>
            {item.description && (
              <p className="mt-2 text-gray-700">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
