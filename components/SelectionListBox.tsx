import React, {Fragment} from 'react';
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {listObj} from "@/types";

interface SelectionListBoxTypes {
    selected: string,
    changeSelected: (selected: string) => void
    listArr: listObj[]
}

const SelectionListBox = ({selected, changeSelected, listArr}: SelectionListBoxTypes) => {
    const [selectedObj] = listArr.filter(listObj => listObj.value === selected);
    return (
        <>
            <Listbox value={selectedObj.value} onChange={changeSelected}>
                <div className="relative mt-1 w-full">
                    <Listbox.Button
                        className="relative w-full cursor-default rounded-lg bg-[#e6e6e6] py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selectedObj.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#e6e6e6] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {listArr.map(listObj => (
                                <Listbox.Option
                                    key={listObj.id}
                                    className={({active}) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-white text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={listObj.value}
                                >
                                    {({selected}) => (
                                        <>
                                                  <span
                                                      className={`block truncate ${
                                                          selected ? 'font-medium' : 'font-normal'
                                                      }`}
                                                  >
                                                    {listObj.name}
                                                  </span>
                                            {selected ? (
                                                <span
                                                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#0B83CC]">
                                                          <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                        </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </>
    );
};

export default SelectionListBox;