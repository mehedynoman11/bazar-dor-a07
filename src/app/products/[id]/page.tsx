import { toBnUnit } from '@/lib/utils';
import { IProduct } from '@/type/type';
import React from 'react';

const ProductDetailsPage = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`);
    const product:IProduct = await res.json();
    // console.log(product)
    const increasePrice = product.yesterday - product.today;

    return (
        <div>
            <div className="max-w-6xl mx-auto container">
                {/* <h1 className='text-xl font-bold text-center sm:text-left'>আমার প্রোফাইল</h1>
                <p className='text-sm text-gray-500'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p> */}

                <div className="bg-white py-2 px-4 rounded-xl w-full mt-5">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                           <p className='text-2xl'>{product.image}</p>
                            <div className="flex flex-col gap-1">
                                <h2 className="font-bold text-2xl">{product.nameBn}</h2>
                                <p className='text-sm'>প্রতি {toBnUnit(product.unit)} · {product.categoryNameBn}</p>
                                <p className='text-sm'>গতকালের তুলনায় আজ দাম বেড়েছে · {increasePrice} টাকা</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-6 px-4 rounded-xl w-full mt-5">
                    <h1 className='text-xl font-bold'>তথ্য</h1>
                   
                </div>

            </div>
        </div>
    );
};

export default ProductDetailsPage;