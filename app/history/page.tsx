import React from 'react';
import Link from 'next/link';

const HistoryPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-500 text-white flex flex-col items-center py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Menu</h1>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link href="/home">
            <a className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
              <span>🏠</span>
              <span>Home</span>
            </a>
          </Link>
          <Link href="/history">
            <a className="flex items-center space-x-2 bg-blue-600 p-2 rounded">
              <span>🔄</span>
              <span>History</span>
            </a>
          </Link>
          <Link href="/profile">
            <a className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
              <span>👤</span>
              <span>Profile</span>
            </a>
          </Link>
        </nav>
        <div className="mt-auto">
          <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 p-2 rounded">
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-8">
        <h2 className="text-xl font-bold mb-4">ปริมาณขยะวันที่ 19-25 เม.ย. 296 ชิ้น</h2>
        <div className="bg-white p-4 rounded shadow-md mb-8">
          {/* Bar Chart Placeholder */}
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <span>Bar Chart</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">ขยะที่เก็บได้</h3>
            <div className="text-4xl font-bold">219</div>
          </div>
          <div className="bg-white p-4 rounded shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">ขยะที่เก็บไม่ได้</h3>
            <div className="text-4xl font-bold">77</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;