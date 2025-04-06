
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { OrderItem } from '../types';

interface OrdersListProps {
  orders: OrderItem[];
  t: any; // Translations
}

const OrdersList: React.FC<OrdersListProps> = ({ orders, t }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.tabs.myOrders}</CardTitle>
        <CardDescription>Track your purchases and sales</CardDescription>
      </CardHeader>
      <CardContent>
        {orders.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.orderID}</TableHead>
                <TableHead>{t.date}</TableHead>
                <TableHead>{t.product}</TableHead>
                <TableHead>{t.price}</TableHead>
                <TableHead>{t.seller}</TableHead>
                <TableHead>{t.status}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map(order => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>${order.price}</TableCell>
                  <TableCell>{order.seller}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={order.status === "Delivered" ? "default" : "secondary"}
                      className={order.status === "Delivered" ? "bg-eco-green" : ""}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">{t.noOrders}</p>
            <Button variant="outline" className="mt-4">{t.browseProducts}</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrdersList;
