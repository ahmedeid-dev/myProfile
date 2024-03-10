import React from 'react'
import  Link  from 'next/link';

export default function layout({children}) {
return <>
    <div className="row g-4">
        <div className="col-md-3">
            <div className="aside">
                <ul className="list-unstyled h4 text-capitalize">
                    
                    <li className="my-3 h2">
                    <Link href="/projects/backery"> Backery</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/fokir"> fokir</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/mealify"> mealify</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/devfolio"> devfolio</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/daniels"> daniels</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/quoteapp"> quoteapp</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/bookmark"> bookmark</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/smartlogin"> smartlogin</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/weather"> weather</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/party"> party</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/yummy"> yummy</Link>
                    </li>

                    <li className="my-3 h2">
                    <Link href="/projects/app1"> app1</Link>
                    </li>

                    <li className="my-3 h2">
                <Link href="/projects/freshcart"> freshcart</Link>
                    </li>

                    <li className="my-3 h2">
                <Link href="/projects/myprofile"> myprofile</Link>
                    </li>
                        
                </ul>
            </div>
        </div>
        <div className="col-md-9">
            <div className="children">
                {children}
            </div>
        </div>
</div>
</>
}
