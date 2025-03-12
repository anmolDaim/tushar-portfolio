import React, { Component } from 'react'

export default class Pulse extends Component {
    render() {
        return (
            <div>
                <div className="shadow rounded-md max-w-sm w-full mx-auto">
                    <div className="animate-pulse ">
                        <div className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 bg-slate-700"></div>
                        <div className="flex-1 space-y-6 py-6">
                            <div className="h-3 bg-slate-700 rounded"></div>
                            
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
