import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Welcome to Our Forms</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/profileForm" legacyBehavior>
              <a className="text-blue-600 hover:underline">Profile Form</a>
            </Link>
          </li>
          <li>
            <Link href="/departmentForm" legacyBehavior>
              <a className="text-blue-600 hover:underline">Department Form</a>
            </Link>
          </li>
          <li>
            <Link href="/centralForm" legacyBehavior>
              <a className="text-blue-600 hover:underline">Central Form</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

