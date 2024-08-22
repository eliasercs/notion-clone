import React from "react";

const Thumbnail = ({content}) => {
    return <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Notion Page</h2>
        <p className="text-gray-700">{content}</p>
      </div>
}

export default Thumbnail