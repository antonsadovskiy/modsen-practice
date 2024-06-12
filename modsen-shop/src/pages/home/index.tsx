import { CatalogCard } from '../../components/catalog-card';
import { Wrapper } from './styled';
import { useEffect, useState } from 'react';
import { Api } from '../../api/api';
import { ProductType } from '../../api/types';
import { Skeleton } from '../../components/skeleton';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [latestProducts, setLatestProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await Api.getProducts();

        if (data) {
          setLatestProducts(data.splice(0, 6));
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className={'latest'}>
        <div className={'titleContainer'}>
          <div className={'label'}>Shop The Latest</div>
          <div className={'viewAll'}>View All</div>
        </div>
        <div className={'list'}>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} width={380} height={472} />
              ))
            : latestProducts.map((item) => (
                <CatalogCard
                  imageSrc={item.image}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                />
              ))}
        </div>
      </div>
    </Wrapper>
  );
};
