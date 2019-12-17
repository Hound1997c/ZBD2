package com.memorynotfound.spring.security.service;

import com.memorynotfound.spring.security.model.Order;
import com.memorynotfound.spring.security.model.Product;
import com.memorynotfound.spring.security.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {
    //Order makeNewOrder(Order order, Bucket bucket);
    void deleteOrderbyProductAndUser(Product product, User user);
    List<Order> findAll();
    List<Order> findAllActive();
    List<Order> makeOrders(User user);
    Order save(Order order);
    Order findOrderByUserAndProduct(User user, Product product);
    void deleteOrder(Order order);
    Order saveAndFlush(Order order);
}
