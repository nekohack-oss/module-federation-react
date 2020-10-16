import * as React from 'react'
import { lazy, Suspense } from 'react'

const RemoteButton = lazy(() => import('app2/Button'))

const App = () => (
    <div>
        <h1>Typescript</h1>
        <h2>App 1</h2>
        <Suspense fallback="Loading Button">
            <RemoteButton />
        </Suspense>
    </div>
)

export default App
