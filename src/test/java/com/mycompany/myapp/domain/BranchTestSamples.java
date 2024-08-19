package com.mycompany.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class BranchTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Branch getBranchSample1() {
        return new Branch().id(1L).name("name1").address("address1").city("city1").state("state1").zipCode("zipCode1");
    }

    public static Branch getBranchSample2() {
        return new Branch().id(2L).name("name2").address("address2").city("city2").state("state2").zipCode("zipCode2");
    }

    public static Branch getBranchRandomSampleGenerator() {
        return new Branch()
            .id(longCount.incrementAndGet())
            .name(UUID.randomUUID().toString())
            .address(UUID.randomUUID().toString())
            .city(UUID.randomUUID().toString())
            .state(UUID.randomUUID().toString())
            .zipCode(UUID.randomUUID().toString());
    }
}
