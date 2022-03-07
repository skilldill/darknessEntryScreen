import { useContext } from 'react';
import { EntryCodeContext } from './EntryCode.context';

export const EntryCodeService = () => {
    const entryCodeService = useContext(EntryCodeContext);
    return entryCodeService;
}