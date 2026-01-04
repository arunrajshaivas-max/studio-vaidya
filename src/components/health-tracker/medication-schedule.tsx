
"use client"

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { format, parse } from 'date-fns';

export type Medication = {
    id: number;
    name: string;
    dosage: string;
    time: string;
    taken: boolean;
    type: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
};

type MedicationScheduleProps = {
    medications: Medication[];
    setMedications: React.Dispatch<React.SetStateAction<Medication[]>>;
};

export function MedicationSchedule({ medications, setMedications }: MedicationScheduleProps) {

    const handleTakenChange = (id: number, taken: boolean) => {
        setMedications(meds => meds.map(med => med.id === id ? { ...med, taken } : med));
    };

    const formatTime = (timeString: string) => {
        try {
            const time = parse(timeString, 'HH:mm', new Date());
            return format(time, 'h:mm a');
        } catch(e) {
            return timeString;
        }
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle>Today's Medication</CardTitle>
                <CardDescription>Check off your medications as you take them.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">Taken</TableHead>
                            <TableHead>Medication</TableHead>
                            <TableHead>Dosage</TableHead>
                            <TableHead>Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {medications.map(med => (
                            <TableRow key={med.id} data-state={med.taken ? "selected" : ""}>
                                <TableCell>
                                    <Checkbox
                                        checked={med.taken}
                                        onCheckedChange={(checked) => handleTakenChange(med.id, !!checked)}
                                        aria-label={`Mark ${med.name} as taken`}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{med.name}</TableCell>
                                <TableCell>{med.dosage}</TableCell>
                                <TableCell className="flex items-center gap-2">
                                    {formatTime(med.time)}
                                    <Badge variant={med.type === 'Morning' ? 'default' : 'secondary'} className="hidden sm:inline-flex">{med.type}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
