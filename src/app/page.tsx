import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Users, BarChart, Settings, Rocket } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "콜 관리",
      description: "실시간 상담원 통화 모니터링 및 관리",
      icon: <PhoneCall className="w-10 h-10 text-primary" />,
    },
    {
      title: "상담원 관리",
      description: "상담 데이터 관리",
      icon: <Users className="w-10 h-10 text-primary" />,
    },
    {
      title: "통계 분석",
      description: "상담 데이터 분석 및 리포트",
      icon: <BarChart className="w-10 h-10 text-primary" />,
    },
    {
      title: "시스템 설정",
      description: "시스템 환경 설정 및 관리",
      icon: <Settings className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <Rocket className="w-16 h-16 text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            FE_PSDW 콜센터 관리 시스템
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            효율적인 콜센터 운영을 위한 올인원 관리 솔루션
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  자세히 보기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2025 FE_PSDW. All rights reserved.
        </div>
      </footer>
    </div>
  );
}