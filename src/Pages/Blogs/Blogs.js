import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10'>
            <section className='text-left'>
                <ol className="border-l-2 border-sky-700">
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-sky-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-sky-700 font-semibold text-xl -mt-2">Title of section 1</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">
                            <p className='text-sm'>4 February, 2022</p>
                            <p className="text-gray-700 mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-sky-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-sky-700 font-semibold text-xl -mt-2">Title of section 2</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">
                            <p className='text-sm'>12 January, 2022</p>
                            <p className="text-gray-700 mt-2 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-sky-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-sky-700 font-semibold text-xl -mt-2">Title of section 3</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">
                            <p className='text-sm'>27 December, 2021</p>
                            <p className="text-gray-700 mt-2 mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    );
};

export default Blogs;