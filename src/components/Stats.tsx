
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="mb-2">Proven Results That Speak for Themselves</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Our clients consistently see significant improvements in their marketing performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-0 shadow-md animate-fade-up">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">250%</div>
              <p className="text-sm text-muted-foreground">Average increase in ROAS</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md animate-fade-up animation-delay-100">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Lower cost per acquisition</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md animate-fade-up animation-delay-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">85%</div>
              <p className="text-sm text-muted-foreground">Client retention rate</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md animate-fade-up animation-delay-300">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">100+</div>
              <p className="text-sm text-muted-foreground">Businesses scaled</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Stats;
